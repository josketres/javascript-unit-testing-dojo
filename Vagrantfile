Vagrant.configure("2") do |config|
  config.vm.box = "precise32"
  config.vm.box_url = "http://files.vagrantup.com/precise32.box"
  config.vm.network :forwarded_port, guest: 8099, host: 8099
  config.vm.provision :shell, :path => "bootstrap.sh"
  config.vm.synced_folder "dojo-workspace/", "/dojo-workspace"
end