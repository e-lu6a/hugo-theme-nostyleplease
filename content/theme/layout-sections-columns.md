---
date: 2026-10-11
title: layout systems
draft: true
---

{{% main %}}
i extended the theme to support some more complex layout options. 
<br/>

two different layout systems at play: 
  1. main + marginalia
  2. wide section
<br/>
  
swap between them at will in any given post. 
use the x-ray function to get some help visualizing these things. 
{{% /main %}}

{{< marginalia side = "left">}}
this is some marginalia on the left side
{{< /marginalia >}}

{{< marginalia side = "left">}}
this is some marginalia again on the left side
{{< /marginalia >}}

{{< marginalia side = "right">}}
this is some marginalia on the right side. 
the marginalia is still in progress. eventually i'd like to be able to anchor its vertical position to specific lines in the main content, but for now they are their individual bands. 
{{< /marginalia >}}

{{% main %}}
this is an example of content in the main section. here is some lorem ipsum to see how the content flows. 

psum nulla. Morbi a venenatis purus, a egestas nibh. Nulla vehicula quam non arcu efficitur, quis egestas velit vestibulum.

Vivamus varius nulla a elementum ornare. Integer accumsan lectus orci, eget venenatis nunc mattis nec. Phasellus fringilla mattis dolor, dapibus porta purus pretium non. Phasellus et mollis quam. Aliquam convallis nulla ac tempus dapibus. Nam sit amet orci dignissim, porta est eget, faucibus ipsum. Cras ornare quam congue arcu vestibulum, vitae blandit dui euismod. Phasellus 
{{% /main %}}

{{% wide %}}
{{% col %}}
you can split things into an arbitrary number of columns. this is the left column. 
{{% /col %}}
{{% col %}}
this is the right column. images, lists, and other markdown should still render normally inside a column.

- one
- two
- three
{{% /col %}}

{{% /wide %}}
{{% wide %}}

{{% primary %}}
there is also this asymmetrical split. Aliquam convallis nulla ac tempus dapibus. Nam sit amet orci dignissim, porta est eget, faucibus ipsum. Cras ornare quam congue arcu vestibulum, vitae blandit dui euismod. Phasellus 
{{% /primary %}}

{{% side %}}
this is the smaller of the asymmetrical split. 
{{% /side %}}
{{% /wide %}}


{{% wide %}}
what happens if you just put straight text here? it amet orci dignissim, porta est eget, faucibus ipsum. Cras ornare quam congue arcu ve it amet orci dignissim, porta est eget, faucibus ipsum. Cras ornare quam congue arcu ve it amet orci dignissim, porta est eget, faucibus ipsum. Cras ornare quam congue arcu ve
{{% /wide %}}

{{% main %}}
anyway let's go back to the start
{{% /main %}}
