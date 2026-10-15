---
date: 2026-10-11
title: layout sections columns
draft: true
---

{{% main %}}
default block

this is content with the default markup. it should take up the narrower default width.
{{% /main %}}

{{% main %}}
two-column section:
{{% /main %}}

{{% wide %}}
{{% col %}}
left column. this column should sit beside the right column on wide screens, and stack above it on narrow screens.
{{% /col %}}
{{% col %}}
right column. images, lists, and other markdown should still render normally inside a column.

- one
- two
- three
{{% /col %}}
{{% /wide %}}

{{% main %}}
another single-column section:

this confirms that a section without any `col` shortcodes is still treated as a single column.
{{% /main %}}

{{% wide %}}
{{% col %}}
**first column.** lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
{{% /col %}}
{{% col %}}
**second column.** ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
{{% /col %}}
{{% col %}}
**third column.** excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
{{% /col %}}
{{% /wide %}}

{{% main %}}
two-column asymmetric section (primary → side):
{{% /main %}}

{{% wide %}}
{{% primary %}}
**primary column.** lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
{{% /primary %}}
{{% side %}}
**side column.** duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
{{% /side %}}
{{% /wide %}}

{{% main %}}
two-column asymmetric section (side → primary):
{{% /main %}}

{{% wide %}}
{{% side %}}
**side column on the left.** excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
{{% /side %}}
{{% primary %}}
**primary column on the right.** sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.
{{% /primary %}}
{{% /wide %}}
