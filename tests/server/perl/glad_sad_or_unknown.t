##
## glad_sad_or_unknown.t
##

use strict;
use warnings;
use utf8;

use Test::More;

use lib ('../../../src/server');
use HappySadUnknown qw(glad_sad_or_unknown);

my @tests = (
    # edge cases
    { text => '', expected => 'unknown' },
    { text => '-', expected => 'unknown' },
    { text => undef, expected => 'unknown' },

    # simple cases
    { text => 'glad', expected => 'happy' },
    { text => 'miserable', expected => 'sad' },
    {
        text => 'I was glad to go to the beach. Very glad. Even though it was a miserable day.',
        expected => 'happy'
    },

    # exactly 50% more
    { text => 'glad sad miserable', expected => 'sad' },

    # less than 50% more

    # over 50% more

    # equal
    { text => 'glad delighted sad miserable', expected => 'unknown' },
);

for (@tests) {
    is(
        glad_sad_or_unknown($_->{text}),
        $_->{expected},
        "$_->{text} - returns expected $_->{expected}"
    );
}

done_testing;
