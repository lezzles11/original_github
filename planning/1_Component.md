# Component Building
#### ALWAYS - SETUP 
##### Principles: ASK HOW AND WHEN 
- Make everything as modular as possible 
- Everything documented on lezzles.github.io 
- Always track on bugs 
```mermaid
graph LR
	subgraph Prepare
		1[ReadMe Checklist/Story] --> 2[Bug] --> 3[Monitors & Timers]
	end
```
#### Step 1: Component Process (Frontend2) 
##### Always do set up and timer 
```mermaid
graph LR
	subgraph Component
		A[Exports] --> B{Works?};
		B -- Yes --> C[Git Push]
		B -- No --> D[Debug]
		D --> B
	end
	subgraph Web
		4[Component] --> 5{Tutorial?};
		5 -- Yes --> 6[Notes]
		5 -- No --> 6[Build]
		6 --> 7[Codesandbox w/ TS]
	end
	subgraph CodeSandBox Collection 
		7[Codesandbox w/ TS] --> 8[Sandbox Selectors]
	end
```
## Web Flow

### Shortcuts

- Hold down command and drag things into the div block
- Name a new class 
	- Essentially just make sure you create a new class before you start making changes
- Option and drag the box to affect both sides 
- 

### Components

#### Navbar
##### Setup
- Drag navbar into the panel 
- Can add brand link
- Can add menu (wrapper) 
- Can add navlink (make sure you add a class) 
- To add on other pages: 
	- Hover, and then right click on the tag, create a symbol. You an do add, select from symbol areas and then drag it anywhere you
##### Options
- Fixed 
- 
##### navbar__wrapper
##### navbar__link
- Menu item to adjust for all views (like the hamburger) 
##### Styling
- Choose a background color
- Go to tablet 
- Style the menu accordingly 
- Set background 

### CSS

### Types 
##### Flexbox
- Set properties on the parent element 

#### One Component Layouts - To Center Something (usually about parent setting rules and children following it) 
- Enable flex (the display) 
- Then click on align and justify 

#### Grid
- Great for two dimensional layouts (setting columns and rows) 

- 

## Exports



## Common Mistakes

All your files and folders are presented as a tree in the file explorer. You can switch from one to another by clicking a file in the tree.

## 

You can rename the current file by clicking the file name in the navigation bar or by clicking the **Rename** button in the file explorer.

## Delete a file

You can delete the current file by clicking the **Remove** button in the file explorer. The file will be moved into the **Trash** folder and automatically deleted after 7 days of inactivity.

## Export a file

You can export the current file by clicking **Export to disk** in the menu. You can choose to export the file as plain Markdown, as HTML using a Handlebars template or as a PDF.


# Synchronization

Synchronization is one of the biggest features of StackEdit. It enables you to synchronize any file in your workspace with other files stored in your **Google Drive**, your **Dropbox** and your **GitHub** accounts. This allows you to keep writing on other devices, collaborate with people you share the file with, integrate easily into your workflow... The synchronization mechanism takes place every minute in the background, downloading, merging, and uploading file modifications.

There are two types of synchronization and they can complement each other:

- The workspace synchronization will sync all your files, folders and settings automatically. This will allow you to fetch your workspace on any other device.
	> To start syncing your workspace, just sign in with Google in the menu.

- The file synchronization will keep one file of the workspace synced with one or multiple files in **Google Drive**, **Dropbox** or **GitHub**.
	> Before starting to sync files, you must link an account in the **Synchronize** sub-menu.

## Open a file

You can open a file from **Google Drive**, **Dropbox** or **GitHub** by opening the **Synchronize** sub-menu and clicking **Open from**. Once opened in the workspace, any modification in the file will be automatically synced.

## Save a file

You can save any file of the workspace to **Google Drive**, **Dropbox** or **GitHub** by opening the **Synchronize** sub-menu and clicking **Save on**. Even if a file in the workspace is already synced, you can save it to another location. StackEdit can sync one file with multiple locations and accounts.

## Synchronize a file

Once your file is linked to a synchronized location, StackEdit will periodically synchronize it by downloading/uploading any modification. A merge will be performed if necessary and conflicts will be resolved.

If you just have modified your file and you want to force syncing, click the **Synchronize now** button in the navigation bar.

> **Note:** The **Synchronize now** button is disabled if you have no file to synchronize.

## Manage file synchronization

Since one file can be synced with multiple locations, you can list and manage synchronized locations by clicking **File synchronization** in the **Synchronize** sub-menu. This allows you to list and remove synchronized locations that are linked to your file.


# Publication

Publishing in StackEdit makes it simple for you to publish online your files. Once you're happy with a file, you can publish it to different hosting platforms like **Blogger**, **Dropbox**, **Gist**, **GitHub**, **Google Drive**, **WordPress** and **Zendesk**. With [Handlebars templates](http://handlebarsjs.com/), you have full control over what you export.

> Before starting to publish, you must link an account in the **Publish** sub-menu.

## Publish a File

You can publish your file by opening the **Publish** sub-menu and by clicking **Publish to**. For some locations, you can choose between the following formats:

- Markdown: publish the Markdown text on a website that can interpret it (**GitHub** for instance),
- HTML: publish the file converted to HTML via a Handlebars template (on a blog for example).

## Update a publication

After publishing, StackEdit keeps your file linked to that publication which makes it easy for you to re-publish it. Once you have modified your file and you want to update your publication, click on the **Publish now** button in the navigation bar.

> **Note:** The **Publish now** button is disabled if your file has not been published yet.

## Manage file publication

Since one file can be published to multiple locations, you can list and manage publish locations by clicking **File publication** in the **Publish** sub-menu. This allows you to list and remove publication locations that are linked to your file.


# Markdown extensions

StackEdit extends the standard Markdown syntax by adding extra **Markdown extensions**, providing you with some nice features.

> **ProTip:** You can disable any **Markdown extension** in the **File properties** dialog.


## SmartyPants

SmartyPants converts ASCII punctuation characters into "smart" typographic punctuation HTML entities. For example:

|                |ASCII                          |HTML                         |
|----------------|-------------------------------|-----------------------------|
|Single backticks|`'Isn't this fun?'`            |'Isn't this fun?'            |
|Quotes          |`"Isn't this fun?"`            |"Isn't this fun?"            |
|Dashes          |`-- is en-dash, --- is em-dash`|-- is en-dash, --- is em-dash|


## KaTeX

You can render LaTeX mathematical expressions using [KaTeX](https://khan.github.io/KaTeX/):

The *Gamma function* satisfying $\Gamma(n) = (n-1)!\quad\forall n\in\mathbb N$ is via the Euler integral

$$
\Gamma(z) = \int_0^\infty t^{z-1}e^{-t}dt\,.
$$

> You can find more information about **LaTeX** mathematical expressions [here](http://meta.math.stackexchange.com/questions/5020/mathjax-basic-tutorial-and-quick-reference).


## UML diagrams

You can render UML diagrams using [Mermaid](https://mermaidjs.github.io/). For example, this will produce a sequence diagram:

```mermaid
graph TD
	A[Component] --> B{Tutorial?};
	B -- Yes --> C[Notes]
	B -- No --> D[Codepen]
	C --> E[Make]
	E --> F
	D --> F[Make in codesandbox]
	F --> G[Remove all weird selectors]
```
