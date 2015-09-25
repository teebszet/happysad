package HappySadUnknown;

##
## HappySadUnknown.pm
##

use strict;
use warnings;
#use feature qw(say);

use Exporter qw(import);

our @EXPORT_OK = qw(glad_sad_or_unknown);

sub glad_sad_or_unknown {
    my $text = shift;

    my @glad_words = qw(delight delighted delightful happy glad joy joyful merry pleasant);
    my @sad_words = qw(disappointed miserable sad sorrow unhappy);
    my $glad_count = _count_matches($text, @glad_words);
    my $sad_count = _count_matches($text, @sad_words);
      
    ## A text is happy if it includes at least 50% more happy words than sad words. 
    ## It is sad if it contains at least 50% more sad words than happy words. 
    ## Otherwise it is unknown.
    my $total_count = $glad_count + $sad_count;
    if ($total_count == 0) { # avoid div by 0
        return 'unknown';
    }
    elsif ( ($glad_count / $sad_count) >= 1.5 ) {
        return 'happy'; 
    }
    elsif ( (($sad_count - $glad_count) / $total_count) >= 0.5 ) {
        return 'sad'; 
    }

    return 'unknown';
}

sub _count_matches {
    my $text = shift;
    my @match_these = @_;

    my $count = 0;
    for my $w (@match_these) {
        my @matches = $text =~ m/\b$w\b/g; # ensure anchors
        my $c = scalar @matches;
        #say "$w: $c";
        $count += $c;
    }
    return $count;
}

