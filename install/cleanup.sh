#!/usr/bin/env bash

# This script cleans-up the app directory and does a clean re-build

FILE=.flame
if test -f "$FILE"; then
    rm -r applications/junction;
    mkdir applications/junction;
    cd applications/junction;
    ember init;
    yes | ember install ember-tribe;
    cd ../../;
    rm build.sh;
else
    echo "This is not a Flame folder."
fi
