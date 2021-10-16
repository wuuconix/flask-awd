#!/bin/bash

sed -i "s/flag{wuuconix}/$FLAG/" /app/flag

export FLAG=not_flag
FLAG=not_flag

rm -f /flag.sh
