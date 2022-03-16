#!/bin/bash

for f in *.PNG ; do
  if [[ $(file -b --mime-type "$f") = image/png ]] ; then
	      mv "$f" "${f/%.PNG/.png}"
	        fi
	done
