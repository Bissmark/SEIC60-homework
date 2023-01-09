# Episode X: A New Terminal

A long time ago in a unix environment far, far away, young Jedi padawans who knew only of desktop software were seduced by the dark side of the Force to enter…

> _The Terminal_

### Getting Started

1. Create a file `commands.txt` and write each command you ran there.

---

Follow the instructions below using all the console commands introduced in class or that you find on your own. Write the answer to each command in `commands.txt`.

You can do each prompt/command one by one or

**Bonus Challenges (Optional)**

* Try applying one command to multiple files at once.
* Try applying one command to all files in a single directory (where necessery)
* Try applying one command to all files that match a pattern.

## Part I: Set the Scene

* Open the **Terminal app**

* Create a new directory called `galaxy_far_far_away` and enter it via terminal

* Create a directory called `death_star`, and make the following files inside of it:
  * **darth_vader.txt**
  * **princess_leia.txt**
  * **storm_trooper.txt**

* In `galaxy_far_far_away`, make a directory named `tatooine` and create the following files in it:
  * **luke.txt**
  * **ben_kenobi.txt**

* Inside of **tatooine** make a directory called `millenium_falcon`, and in it create:

  * **han_solo.txt**
  * **chewbaca.txt**

## Part II: mv - rename

<details>
<summary>Hint</summary>
You can rename a file using the `mv` command.

For example, rename `file1.txt` to `file2.txt`

```bash
mv file1.txt file2.txt
```
</details>

* Rename **ben_kenobi.txt** to **obi_wan.txt**.

## Part II: cp - copy

<details>
<summary>Hint</summary>
You can copy a file from one location to another using the `cp` command.

For example, copy **file1.txt** to its parent directory:

```bash
cp file1.txt ..
```

or, copy **file1.txt** to a sibling directory:

```bash
cp file1.txt ../some_directory
```

or, copy **file1.txt** to a child directory:

```bash
cp file1.txt some_directory
```
</details>

* Copy **storm_trooper.txt** from **death_star** to **tatooine**

## Part IV: mv - move

<details>
<summary>Hint</summary>
You can use the `mv` command to move files from one location to another

For example, move a file from its current location to the parent directory:

```
mv file1.txt ..
```

And, move a file from its current location to a sibling directory:

```
mv file1.txt ../some_directory
```

Finally, move a file from its current location to a child directory:

```
mv file1.txt some_directory
```

You can also move directories into other directories using the same syntax
</details>

* Move **luke.txt** and **obi_wan.txt** to the `millenium_falcon`

* Move `millenium_falcon` out of `tatooine` and into `galaxy_far_far_away`

* Move `millenium_falcon` into `death_star`

* Move **princess_leia.txt** into the `millenium_falcon`

## Part V: rm - remove

<details>
<summary>Hint</summary>
You can use `rm` to delete a file.

For example, delete a file:

```bash
rm file1.txt
```
</details>

* Delete **obi_wan.txt**

## Part VI: all together

* In `galaxy_far_far_away`, make a directory called `yavin_4`

* Move the `millenium_falcon` out of the `death_star` and into `yavin_4`

* Make a directory in `yavin_4` called `x_wing`

* Move **princess_leia.txt** to `yavin_4` and **luke.txt** to `x_wing`

* Move the `millenium_falcon` and `x_wing` out of `yavin_4` and into `galaxy_far_far_away`

* In `death_star`, create directories for `tie_fighter_1`, `tie_fighter_2` and `tie_fighter_3`

* Move **darth_vader.txt** into `tie_fighter_1`

* Make a copy of **storm_trooper.txt** in both `tie_fighter_2` and `tie_fighter_3`

* Move all of the `tie_fighters` out of the `death_star` and into `galaxy_far_far_away`

## Part VII: rm -r - remove directories

**Be careful with this command - cannot undo!**

Make sure you delete the right thing, or you could accidentally delete the contents of your computer.

This command will typically not ask you if you really want to delete. It will just delete!

* Remove **tie_fighters** 2 and 3.

## Part VIII: The Final Act

* Touch a file in `x_wing` called **the_force.txt**

* Destroy the `death_star` and anyone inside of it.

* Return `x_wing` and the `millenium_falcon` to `yavin_4`

* Celebrate!