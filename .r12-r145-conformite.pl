#!/usr/bin/perl
# R12 + R145 conformity patch for canalizador-norte-reparos
# Idempotent (re-running does nothing extra).
#
# Usage:
#   perl .r12-r145-conformite.pl [client/public] [public]
#
# DO NOT include dist/ (build output).
# DO NOT include _archive/ (frozen reference).

use strict;
use warnings;
use utf8;
use File::Find;

my @roots = @ARGV;
@roots = ('client/public', 'public') unless @roots;

# ============= R12: PRIX BIDON -> sob orçamento =============

# Each entry: [ regex, replacement_string_or_coderef, label ]

# Helper: replacements that use $1 etc. must be CODE refs to work correctly
# with s/// when stored in a variable.

my @patterns;

# ----- R12 -----
push @patterns, [
    qr{<div\s+class="price">\s*a\s+partir\s+de\s+\d+\s*€\s*</div>}i,
    '<div class="price">sob orçamento</div>',
    'R12 price=a partir de'
];
push @patterns, [
    qr{<div\s+class="preco">\s*[dD]esde\s+\d+\s*EUR\s*</div>}i,
    '<div class="preco">sob orçamento</div>',
    'R12 preco=Desde NEUR'
];
push @patterns, [
    qr{<div\s+class="preco">\s*[dD]esde\s+€\s*\d+\s*</div>}i,
    '<div class="preco">sob orçamento</div>',
    'R12 preco=Desde €N'
];
push @patterns, [
    qr{<div\s+class="preco">\s*desde\s+\d+\s*€\s*</div>}i,
    '<div class="preco">sob orçamento</div>',
    'R12 preco=desde N €'
];

# meta title with " - Desde NEUR" -> " - sob orçamento"
push @patterns, [
    qr{(content="[^"]*?)\s*[-–—]\s*[dD]esde\s+\d+\s*EUR(")}i,
    sub { "$1 - sob orçamento$2" },
    'R12 meta Desde NEUR'
];
push @patterns, [
    qr{(content="[^"]*?)\s*[-–—]\s*[dD]esde\s+€\d+(")}i,
    sub { "$1 - sob orçamento$2" },
    'R12 meta Desde €N'
];
push @patterns, [
    qr{(content="[^"]*?)\s*[-–—]\s*desde\s+\d+\s*€(")}i,
    sub { "$1 - sob orçamento$2" },
    'R12 meta desde N€'
];

# Catch-all for ANY "Desde NEUR" anywhere in HTML body (incl. JSON-LD inside <script>)
# Replaces "Desde NNNEUR" or "Desde NNN€" with "sob orçamento" inline.
# Careful: skip "Desde 2011"-like non-price contexts. Restricted to either € or EUR suffix.
push @patterns, [
    qr{\b[Dd]esde\s+(\d{2,3})\s*(?:€|EUR)\b},
    'sob orçamento',
    'R12 Desde N EUR generic'
];

# Same for "a partir de NN€/EUR"
push @patterns, [
    qr{\b[Aa]\s+partir\s+de\s+\d+\s*€},
    'a partir de sob orçamento',
    'R12 a partir de N€ generic'
];
push @patterns, [
    qr{\b[Aa]\s+partir\s+de\s+\d+\s*EUR},
    'a partir de sob orçamento',
    'R12 a partir de N EUR generic'
];

# "desde NN€/EUR" lowercase variant
push @patterns, [
    qr{\bdesde\s+\d+\s*€},
    'sob orçamento',
    'R12 desde N€ generic'
];
push @patterns, [
    qr{\bdesde\s+\d+\s*EUR},
    'sob orçamento',
    'R12 desde N EUR generic'
];

# ----- R145 zone UI -----
push @patterns, [
    qr{(<div\s+class="zone-badge">\s*Zona\s+\d+)\s*•[^<]*(</div>)}i,
    sub { "$1$2" },
    'R145 zone-badge'
];
push @patterns, [
    qr{(<div\s+class="zone-info"[^>]*>Zona\s+\d+\s*·\s*\d+€\s*deslocação)\s*·\s*(?:<\s*\d+\s*min|\d+(?:-\d+)?\s*(?:min|h))(</div>)}i,
    sub { "$1$2" },
    'R145 zone-info delai'
];
push @patterns, [
    qr{(<div\s+class="zone-info"[^>]*>Zona\s+\d+\s*·\s*\d+€\s*deslocação)\s*·\s*[Ss]ob\s+marcação(</div>)}i,
    sub { "$1$2" },
    'R145 zone-info marc'
];

# ----- R145 phrases -----
push @patterns, [
    qr{5-15\s+minutos?\s+para\s+Zonas?\s+\d+(?:-\d+)?(?:\s*\(?[^)]*\)?)?}i,
    'resposta mediante confirmação por chamada',
    'R145 5-15 min zonas'
];
push @patterns, [
    qr{5-15\s+min(?:\s+para\s+Z\d+|\s+de\s+[A-Z][a-zçãáéíóúàèìòùâêîôûäëïöü\-]+(?:\s+[a-zçãáéíóúàèìòùâêîôûäëïöü]+){0,4})?}i,
    'mediante confirmação por chamada',
    'R145 5-15 min generique'
];
push @patterns, [
    qr{[Tt]empo\s+m[ée]dio\s+de\s+resposta\s+(?:[ée]\s+de\s+|inferior\s+a\s+)?\d+(?:-\d+)?\s*minutos?\s+(?:para|ap[óo]s)[^.<>"]*}i,
    'Tempo de resposta: mediante confirmação por chamada',
    'R145 tempo medio N min ctx'
];
push @patterns, [
    qr{[Tt]empo\s+m[ée]dio\s+de\s+resposta\s+(?:[ée]\s+de\s+)?\d+\s*minutos?}i,
    'Tempo de resposta: mediante confirmação por chamada',
    'R145 tempo medio N min'
];

# "o tempo médio é de NN minutos" (sans "de resposta") — variante FAQ/processed
push @patterns, [
    qr{[Tt]empo\s+m[ée]dio\s+(?:[ée]\s+de\s+|inferior\s+a\s+)?\d+(?:-\d+)?\s*minutos?}i,
    'Tempo mediante confirmação por chamada',
    'R145 tempo medio é de NN min generique'
];

# HTML: <strong>Tempo de resposta médio:</strong> NN minutos
push @patterns, [
    qr{(<strong[^>]*>[Tt]empo\s+m[ée]dio(?:\s+de\s+resposta)?\s*:</strong>)\s*\d+(?:-\d+)?\s*minutos?}i,
    sub { "$1 mediante confirmação por chamada" },
    'R145 strong tempo medio N min'
];

# "Tempo médio:</strong> <strong>NN minutos</strong>" — variante FAQ inline (rare)
push @patterns, [
    qr{(<strong[^>]*>[Tt]empo\s+m[ée]dio(?:\s+de\s+resposta)?:?</strong>)\s*<strong[^>]*>\s*\d+(?:-\d+)?\s*minutos?\s*</strong>}i,
    sub { "$1 <strong>mediante confirmação por chamada</strong>" },
    'R145 strong-inline tempo medio N min'
];
push @patterns, [
    qr{[Rr]esposta\s+em\s+\d+\s*minutos?}i,
    'Resposta mediante confirmação por chamada',
    'R145 resposta em N'
];
push @patterns, [
    qr{[Rr]esposta\s+em\s+~\s*\d+\s*min}i,
    'Resposta mediante confirmação por chamada',
    'R145 Resposta em ~N min'
];
push @patterns, [
    qr{\d+\s*minutos?\s+ap[óo]s}i,
    'mediante confirmação por chamada após',
    'R145 N minutos apos'
];
push @patterns, [
    qr{inferior\s+a\s+\d+\s*minutos?\s+ap[óo]s}i,
    'mediante confirmação por chamada após',
    'R145 inferior a N apos'
];
push @patterns, [
    qr{\d+\s*minutos?\s+para\s+Zonas?}i,
    'mediante confirmação por chamada para Zonas',
    'R145 N minutos para Zonas'
];
push @patterns, [
    qr{\d+\s*minutos?\s+para}i,
    'mediante confirmação por chamada para',
    'R145 N minutos para'
];
push @patterns, [
    qr{(?:[Aa]\s+)?~?\d+(?:-\d+)?\s*min(?:utos?)?\s+(?:de|para)\s+(?:resposta|[A-Z][a-zçãáéíóúàèìòùâêîôûäëïöü]+(?:\s+[a-zçãáéíóúàèìòùâêîôûäëïöü]+){0,4})}i,
    'mediante confirmação por chamada',
    'R145 N min de/para X'
];
push @patterns, [
    qr{Pre[çc]o\s+dado\s+ao\s+telefone\s+em\s+\d+\s*min(?:utos?)?}i,
    'Preço dado ao telefone',
    'R145 preco em N min'
];
push @patterns, [
    qr{\bem\s+\d+\s*[mM]in\b},
    'mediante confirmação',
    'R145 em N min bare'
];
# "até N minutos" / "até N min" — same doctrine (délai chiffré)
push @patterns, [
    qr{at[ée]\s+\d+\s*min(?:utos?)?}i,
    'mediante confirmação',
    'R145 ate N min'
];

# "tempo de resposta ~N min" — variante répandue sans "médio" ni préposition
push @patterns, [
    qr{[Tt]empo\s+de\s+resposta\s+(?:[ée]\s+de\s+)?~?\s*\d+(?:-\d+)?\s*min(?:utos?)?}i,
    'Tempo de resposta: mediante confirmação por chamada',
    'R145 tempo resposta ~N min'
];

# "(em ~N min)" / "Resposta em ~N minutos" — variante tilde
push @patterns, [
    qr{[Rr]esposta\s+em\s+~?\s*\d+(?:-\d+)?\s*min(?:utos?)?}i,
    'Resposta mediante confirmação por chamada',
    'R145 Resposta em ~?N min'
];

# ============= APPLY =============

my $file_count = 0;
my $change_count = 0;
my %by_label;
my $verbose = $ENV{VERBOSE};

find(
    {
        no_chdir => 1,
        wanted   => sub {
            return unless -f;
            return unless /\.html$/;
            my $path = $File::Find::name;
            return if $path =~ m{/node_modules/};
            return if $path =~ m{/dist/};
            return if $path =~ m{/_archive/};
            return if $path =~ m{/\.worktrees/};

        open(my $in, '<:utf8', $path) or do { warn "open $path: $!"; return };
        local $/;
        my $content = <$in>;
        close($in);

        my $orig = $content;
        my $local_changes = 0;
        for my $pat (@patterns) {
            my ($re, $repl, $label) = @$pat;
            my $nb = 0;
            if (ref $repl eq 'CODE') {
                $nb = ($content =~ s/$re/$repl->()/eg);
            } else {
                $nb = ($content =~ s/$re/$repl/g);
            }
            next unless $nb;
            $local_changes += $nb;
            $by_label{$label} += $nb;
            print "  $label: $nb in $path\n" if $verbose;
        }

        if ($content ne $orig) {
            open(my $out, '>:utf8', $path) or do { warn "write $path: $!"; return };
            print $out $content;
            close($out);
            $file_count++;
            $change_count += $local_changes;
        }
        }
    },
    @roots
);

print "\n=== SUMMARY ===\n";
print "Files changed: $file_count\n";
print "Total replacements: $change_count\n\n";
print "By label:\n";
for my $k (sort keys %by_label) {
    printf "  %-30s %d\n", $k, $by_label{$k};
}