 .PHONY: all

all: prepare start

prepare: 
	composer install
	php artisan key:generate

start: 
	php artisan serve
