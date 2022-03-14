# Purpose:

- To quickly integrate post, put, edit and delete routes for swagger documentation

Instructions:

Go into swagger/index.yaml

1. Replace host and name

2. To ADD and get ALL (db/all.yaml)

- [ ] Definitions: JSON

## Post definition

```yaml
title: post_problem
example:
  problem: ""
  whatshouldbe: ""
  whatactuallyis: ""
  hypothesis: ""
  plan: ""
  status: to do
  importance: high
  difficulty: easy
  end: 2022-03-03
  email: ryanyiu@bu.edu
  public: public
type: object
properties:
  problem:
    type: string
  whatshouldbe:
    type: string
  whatactuallyis:
    type: string
  hypothesis:
    type: string
  plan:
    type: string
  status:
    type: string
  importance:
    type: string
  difficulty:
    type: string
  end:
    type: string
  email:
    type: string
  public:
    type: string
```

- [ ] Route

## Get All and post One routes

```yaml
  get:
  description: description
  summary: get all
  tags:
    - problem
  parameters:
    - $ref: "#/definitions/parameters/user_id"
  responses:
    "200":
      description: array of problems
      schema:
        type: array
        items:
          $ref: "#/definitions/get_problem"
    "400":
      $ref: "#/definitions/error"


post:
  description: description
  summary: post one
  produces:
    - application/json
  tags:
    - problem
  parameters:
    - $ref: "#/definitions/parameters/user_id"
    - in: body
      name: user
      description: The user to create.
      schema:
        $ref: "#/definitions/post_problem"
  responses:
    "201":
      $ref: "#/definitions/post_problem"
    default:
      $ref: "#/definitions/post_problem"


```

2. To add get edit, delete and get one (all which requires id - db/id.yaml)

- [ ] Definitions: JSON

### Get

```yaml
title: get_problem
example:
  id: 14
  problem_user_id: 4
  problem_hourglass_id: 23
  problem: "this is not being used frequently enough "
  whatshouldbe: "this should be used, tracking things so you stay focused"
  whatactuallyis: "i think i just pull it up when i need to "
  hypothesis: "i think it's because i'm not planning it out well enough or like spending too much time on the internet or having too high expectations"
  plan: "i think make a checklist and honestly keep yourself accountable by sending what you are going to do to ryan or something "
  problem_id: 14
  hourglass_id: 23
  user_id: 4
  hourglass_user_id: 4
  importance: medium
  difficulty: hard
  email: null
  start: "2021-09-03T21:21:52.000Z"
  edit: "2021-12-20T08:10:11.927Z"
  end: "2021-11-27T08:27:40.000Z"
  public: false
  status: done
  format_start: "05:21:52 September 4, 2021"
  format_edit: "16:10:11 December 20, 2021"
  format_end: "16:27:40 November 27, 2021"
type: object
properties:
  id:
    type: number
  problem_user_id:
    type: number
  problem_hourglass_id:
    type: number
  problem:
    type: string
  whatshouldbe:
    type: string
  whatactuallyis:
    type: string
  hypothesis:
    type: string
  plan:
    type: string
  problem_id:
    type: number
  hourglass_id:
    type: number
  user_id:
    type: number
  hourglass_user_id:
    type: number
  seconds:
    type: number
  importance:
    type: string
  difficulty:
    type: string
  email:
    type: string
  start:
    type: string
  edit:
    type: string
  end:
    type: string
  public:
    type: boolean
  status:
    type: string
  format_start:
    type: string
  format_edit:
    type: string
  format_end:
    type: string
```

### Edit

```yaml
title: edit_problem
example:
  problem: ""
  whatshouldbe: ""
  whatactuallyis: ""
  hypothesis: ""
  plan: ""
  status: to do
  importance: high
  difficulty: easy
  end: 2022-03-03
type: object
properties:
  problem:
    type: string
  whatshouldbe:
    type: string
  whatactuallyis:
    type: string
  hypothesis:
    type: string
  plan:
    type: string
  status:
    type: string
  importance:
    type: string
  difficulty:
    type: string
  end:
    type: string
```

- [ ] Route

```yaml
delete:
  description: description
  summary: delete one
  tags:
    - problem
  parameters:
    - $ref: "#/definitions/parameters/user_id"
    - $ref: "#/definitions/parameters/problem_id"
  responses:
    "200":
      description: deleted
    "400":
      $ref: "#/definitions/error"
    "418":
      description: keep calm

put:
  description: description
  summary: summary
  tags:
    - problem
  parameters:
    - $ref: "#/definitions/parameters/user_id"
    - $ref: "#/definitions/parameters/problem_id"
    - in: body
      name: edit one
      description: The problem to create.
      schema:
        $ref: "#/definitions/edit_problem"
  responses:
    "202":
      $ref: "#/definitions/edit_problem"
    "400":
      $ref: "#/definitions/error"

get:
  description: description
  summary: get one
  tags:
    - problem
  parameters:
    - $ref: "#/definitions/parameters/user_id"
    - $ref: "#/definitions/parameters/problem_id"
  responses:
    "200":
      $ref: "#/definitions/get_problem"
    "400":
      $ref: "#/definitions/error"
```
