This is an article on how to submit and publish your packages in the Arch User Repository or AUR. The AUR is a community-driven repository for Arch-based Linux distributions users.
It contains package descriptions named PKGBUILDs that allow you to compile a package from source with makepkg and then install it via pacman (package manager in Arch Linux).

## What topics I will cover

- [Setting up the AUR account.](#setting-up-account)
- [Creating needed files.](#creating-needed-files)
- [Uploading the PKGBUILD to the AUR.](#uploading-files-to-aur)
- [Testing the AUR package.](#testing-aur-package)

## What topics I will not cover

- How to create a PKGBUILD - There is already an amazing [video tutorial](https://www.youtube.com/watch?v=crnGzF43aoc) and an [ArchWIki article](https://wiki.archlinux.org/title/Creating_packages) on this topic.

## Setting up the AUR account

First you need to go to [aur.archlinux.org](https://aur.archlinux.org) and create an account, filling the details. The next step is to setup ssh keys so that you can submit packages. First you need to generate your ssh keys using this command:

`$ ssh-keygen -f ~/.ssh/aur`

The next step is to add these lines to `~/.ssh/config`. If you don't have the file, create one:

````
Host aur.archlinux.org
  IdentityFile ~/.ssh/aur
  User USERNAME
````
Replace USERNAME with you AUR account username.

The final step is to copy the contents of `~/.ssh/aur.pub` and paste it in the SSH Public Key section in My Account tab and save the changes.

## Creating needed files

In the location where you have kept your PKGBUILD file, run this command to generate the .SRCINFO file:

`$ makepkg --printsrcinfo > .SRCINFO`

It is recommended to not manually change the .SRCINFO file. The SRCINFO file is the metadata file for the AUR. When updating your package, run this command one more time to update the metadata.

## Uploading the PKGBUILD to the AUR

To upload the package to the AUR, you first need to git clone your AUR repository.

`$ git clone ssh://aur@aur.archlinux.org/YOUR_PACKAGE_NAME.git`

You maybe thinking that you haven't created the repository, but you are able to clone the repository. The thing is that when you clone the repository, it creates the repository.

The next thing to do is to copy the PKGBUILD, .SRCINFO and any other files needed for the package to the repository's folder.

The last thing to do is to check if all your files needed for the package are there and commit to the repository using the following command:

`$ git add . && git commit -m "YOUR_COMMIT_MESSAGE" && git push`

Note that when pushing the changes to the repository, you will be not asked for your password because the ssh keys are setup.

## Testing the AUR package

Once you have pushed your changes to the AUR, test your package if it is building and installing properly, just to be in the safe side. For testing use an AUR helper to install the package or install it manually by running:

`$ git clone https://aur.archlinux.org/YOUR_PACKAGE_NAME.git && cd YOUR_PACKAGE_NAME && makepkg -si`

If it builds properly, that's amazing, but if there are any issues, debug it and push your changes.

That is it for this blog on how to submit and publish your packages in the AUR. Make sure you check out the sources I mentioned above for making a proper PKGBUILD.
