---
date: 2026-10-14
title: x-ray
draft: true
---

this text is not wrapped in any shortcodes. 
it ac, facilisis dictum enim. Vivamus leo justo, pellentesque sed lectus at, euismod euismod ligula. Sed sollicitudin lectus sit amet hendrerit malesuada. Etiam ipsum lacus, tincidunt non fringilla dictum, hendrerit et ipsum. Ut scelerisque vulputate condimentum. 

{{% main %}}
this is within the "main" pane, in the center. 
the background is yellow. 
640px wide
markdown still works: _italic_, **bold**, and {{h highlights}}.
{{% /main %}}

{{< marginalia side="right" >}}
**right marginalia**

this note sits in the right marginalia lane, shown in blue. it is authored outside the main band so it does not increase the main band's height.
{{< /marginalia >}}

{{% main %}}
**another main band**

this paragraph follows the right marginalia band. the marginalia above is allowed to overlap downward if it is taller than its own band.
{{% /main %}}

{{< marginalia side="left" >}}
**left marginalia**

this note sits in the left marginalia lane, shown in blue.
{{< /marginalia >}}

{{< marginalia side="left" >}}
**another left marginalia**

this is another left marginalia. 
this
is 
a
test
for
height
{{< /marginalia >}}

{{< marginalia side="left" >}}
**left marginalia**
and yet another
{{< /marginalia >}}

{{< marginalia side="right" >}}
and now on the right!
{{< /marginalia >}}

{{% main %}}
**band-main with preceding left marginalia**

this paragraph is in the default pane, shown in yellow.
{{% /main %}}

{{% wide %}}
{{% col %}}
**band-wide**

this is the 1100px wide block. the whole band is pink.
{{% /col %}}
{{% col %}}
this is the second column inside a wide band. equal columns share the width.
{{% /col %}}
{{% /wide %}}

{{% wide %}}
{{% primary %}}
**band-wide asymmetric**
primary column (about 60%) inside the pink wide block.
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nisl lorem, viverra vitae elit ac, facilisis dictum enim. Vivamus leo justo, pellentesque sed lectus at, euismod euismod ligula. Sed sollicitudin lectus sit amet hendrerit malesuada. Etiam ipsum lacus, tincidunt non fringilla dictum, hendrerit et ipsum. Ut scelerisque vulputate condimentum. 
{{% /primary %}}
{{% side %}}
side column (about 40%) inside the pink wide block.
{{% /side %}}
{{% /wide %}}
