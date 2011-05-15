#!/usr/bin/env python

# Quick hack for now: make sure Django is on python search path.  This
# should be replaced with a proper virtualenv at some point.
import os, sys
sys.path.insert(0, os.path.realpath(os.path.join(os.path.dirname(__file__), '../django')))

from django.core.management import execute_manager
import imp
try:
    imp.find_module('settings') # Assumed to be in the same directory.
except ImportError:
    import sys
    sys.stderr.write("Error: Can't find the file 'settings.py' in the directory containing %r. It appears you've customized things.\nYou'll have to run django-admin.py, passing it your settings module.\n" % __file__)
    sys.exit(1)

import settings

if __name__ == "__main__":
    execute_manager(settings)
