#!/bin/bash

sudo apt-get update
sudo apt-get install -y libssl-dev libreadline-dev zlib1g-dev # ruby compile dependencies
sudo apt-get install -y gcc make # for compiling dynamic bash extensions to speed up rbenv
sudo apt-get install -y g++ # jekyll native extension dependencies

# rbenv
git clone https://github.com/rbenv/rbenv.git /home/vagrant/.rbenv
cd /home/vagrant/.rbenv && src/configure && make -C src
echo 'export PATH="$HOME/.rbenv/bin:$PATH"' >> /home/vagrant/.bashrc
echo 'eval "$(rbenv init -)"' >> /home/vagrant/.bashrc

# ruby-build (as rbenv plugin)
mkdir -p /home/vagrant/.rbenv/bin/rbenv/plugins
git clone https://github.com/rbenv/ruby-build.git /home/vagrant/.rbenv/plugins/ruby-build

# install ruby
NUM_CORES=$(grep -c ^processor /proc/cpuinfo)
MAKE_OPTS="-j $NUM_CORES" /home/vagrant/.rbenv/bin/rbenv install -s 2.5.0
/home/vagrant/.rbenv/bin/rbenv global 2.5.0

# install bundler
gem install bundler
cd /vagrant
bundle
