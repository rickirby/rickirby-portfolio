# SwiftLint Quarantine Strategy

Company Related: **Stockbit**<br>
Created At: **9 Sep 2024**<br>

### Background
We detect numerous `SwiftLint` violations scattered accross hundreds of files in our project. We've employed a strategic approach to manage and resolve them efficiently. One of the strategies we're utilizing is the `Boy Scout Rule`. However, we would like to enhance our efforts further.

### Plan
I introduce **SwiftLint Quarantine Strategy** to enhance our efforts in solving numerous `SwiftLint` violations. The concept is described in image below.<br>

![Quarantine Diagram](/portfolio/port_sb_swiftlint_quarantine_diagram.png)

The whole files in our project are separated into two categories: *Healthy Files*, and *Infected Files*. Healthy Files are files that don't have any SwiftLint violations within it, while Infected Files are files that have SwiftLint violations at least one within it.<br>

I create a `shell` script to get the list of infected files. I format it with a dash on every line to facilitate copying it into exclusion list inside `.swiftlint.yml` file. Here is the result example.<br>

![Result Example](/portfolio/port_sb_swiftlint_quarantine_infected_list.png){width=500}