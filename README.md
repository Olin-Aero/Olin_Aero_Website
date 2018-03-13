# Olin AERO Website

To build the site, please get [vagrant](https://www.vagrantup.com/) and then:

```bash
git clone -b iarc <this repo>
cd <this repo>
vagrant up # some things might fail towards the end. don't worry about it.
vagrant ssh
bundle install
bundle exec jekyll serve -H 0.0.0.0 --force-polling
```

now open [http://localhost:4567](http://localhost:4567)
see it?

## Deployment (on Olin network)

To quickly share changes you made (such as a new article) without publishing them, [surge.sh](http://surge.sh/) is pretty good.

For publishing, talk to IT to get added to the `aero` group on linwebdev and linwebprod. After that do this from the Olin network:
```bash
cd <this repo>
bundle exec jekyll build

# for development
scp -r _site <username>@linwebdev:/var/www/virtual/aero.dev.olin.edu/html

# for production
scp -r _site <username>@linwebprod:/var/www/virtual/aero.olin.edu/html
```
