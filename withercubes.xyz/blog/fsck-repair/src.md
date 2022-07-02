fsck (file system consistency check) is a system utility on linux to help repair errors in a filesystem like bad superblocks.

## Options available in fsck

Fsck command needs to be run with root privileges. You can use it with different arguments. Their usage depend on your specific case. Below you will see some of the more important options:

- `-A` - Used for checking all filesystems. The list is taken from `/etc/fstab`.
- `-C` - Shows progress bar.
- `-l` - Locks the device to guarantee no other program will try to use the partition during the check.
- `-M` - Do not check mounted filesystems.
- `-N` - Only show what would be done – no actual changes are made.
- `-P` - If you want to check filesystems in parallel, including root.
- `-R` - Do not check root filesystem. This is useful only with `-A`.
- `-r` - Provide statistics for each device that is being checked.
- `-T` - Does not show the title.
- `-t` - Exclusively specify the filesystem types to be checked. Types can be comma separated list.
- `-V` - Provide description what is being done.

## How to run fsck to repair linux file system errors

In order to run fsck, you will need to ensure that the partition you are going to check is not mounted. For this case, I will use `/dev/sdX` as the example drive.

First, you need to unmount the partition:

```
# umount /dev/sdX
```

Then fsck can be run with:

```
# fsck /dev/sdX
```

Sometimes fsck can guess the wrong type of filesystem and cause a lot of other problems. To avoid that, specify the filesystem type.

I am going to take ext4 as the filesystem type for this example.

```
# fsck.ext4 /dev/sdX
```

## Understanding fsck exit codes

After running fsck, it will return an exit code. These cods can be seen in fsck’s manual by running:

```
# man fsck

0      No errors
1      Filesystem errors corrected
2      System should be rebooted
4      Filesystem errors left uncorrected
8      Operational error
16     Usage or syntax error
32     Checking canceled by user request
128    Shared-library error
```

If your shell prompt does not output the exit code, you can find it out by running `echo $?` (if you use bash or zsh as your shell).

## Repair linux filesystem errors

Sometimes more than one error can be found on a filesystem. In such cases you may want fsck to automatically attempt to correct the errors. This can be done with:

```
# fsck -y /dev/sdX
```

The `-y` flag, automatically `“yes”` to any prompts from fsck to correct an error.
