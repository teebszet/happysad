#! /usr/bin/env perl

##
## happysad.pl
##

use strict;
use warnings;
use feature qw(say);

use Getopt::Long;
use HappySadUnknown qw(glad_sad_or_unknown);

my ($input_text, $help);

GetOptions(
    'text|t=s' => \$input_text,
    'help'     => \$help,
);

help() if $help;
help("--text is required") if !$input_text;

say glad_sad_or_unknown($input_text);

exit 0;

## SUBS ##

sub help {
    say @_;
    say <<"    EOHELP";

    Name: 
        happysad.pl

    Usage:
        --text      required e.g. "I was glad to go to the beach. Very glad. 
                    Even though it was a miserable day."

        --help      this.

    EOHELP
    exit 0;
}
