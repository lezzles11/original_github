# The Price of My Life
#### ALWAYS - SETUP 
##### Principles 
- Make everything as modular as possible 
- Everything documented on lezzles.github.io 
- 
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
#### Step 2: API (Typescript)
##### Always do set up and timer 
Testing is important here because data can be inaccurate
```mermaid
graph LR
	subgraph API
		G[Working Example] --> I[Sandbox & Easy Peasy] --> 9[Test] --> O[Add to Frontend State]
	end
```
#### Step 3:  State (FrontendState) 
##### Always do set up and timer 
```mermaid
graph LR
	subgraph Integration
		G[State Component] --> I[UI Component] --> O[Integrate & Docs lezzles]
	end
	subgraph States and Inputs
		A[Element with Props] --> B{Works with Routes?};
		B -- Yes --> C[State Component]
		B -- No --> D[Debug]
		D --> B
	end
```

#### Step 4:  Database (Backend) 
##### Always do set up and timer 
```mermaid
graph LR
	subgraph Integration
		G[State Component] --> I[UI Component] --> O[Integrate & Docs lezzles]
	end
	subgraph Test
		A[Element with Props] --> B{Works with Routes?};
		B -- Yes --> C[State Component]
		B -- No --> D[Debug]
		D --> B
	end
```
