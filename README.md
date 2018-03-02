# Olin AERO Website

To get compile things, please get [vagrant](https://www.vagrantup.com/) and then:

```bash
git clone -b iarc <this repo>
cd <this repo>
vagrant up # some things might fail towards the end. don't worry about it.
vagrant ssh
bundle exec jekyll serve -H 0.0.0.0 --force-polling
```

now open [http://localhost:4567](http://localhost:4567)
see it?