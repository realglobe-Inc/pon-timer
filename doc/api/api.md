# pon-timer@1.1.1

Timer for pon

+ Functions
  + [create(args)](#pon-timer-function-create)
+ [`PonTimer`](#pon-timer-class) Class
  + [new PonTimer()](#pon-timer-class-pon-timer-constructor)
  + [timer.tick(name)](#pon-timer-class-pon-timer-tick)
  + [timer.sleep(duration)](#pon-timer-class-pon-timer-sleep)
  + [timer.isSleeping()](#pon-timer-class-pon-timer-isSleeping)

## Functions

<a class='md-heading-link' name="pon-timer-function-create" ></a>

### create(args) -> `PonTimer`

Create a PonTimer instance

| Param | Type | Description |
| ----- | --- | -------- |
| args | * |  |



<a class='md-heading-link' name="pon-timer-class"></a>

## `PonTimer` Class

Timer for pon

**Extends**:

+ `AsTimer`



<a class='md-heading-link' name="pon-timer-class-pon-timer-constructor" ></a>

### new PonTimer()

Constructor of PonTimer class



<a class='md-heading-link' name="pon-timer-class-pon-timer-tick" ></a>

### timer.tick(name) -> `number`

Returns time passed from last tick

| Param | Type | Description |
| ----- | --- | -------- |
| name | string | Tick name |


<a class='md-heading-link' name="pon-timer-class-pon-timer-sleep" ></a>

### timer.sleep(duration) -> `Promise`

Sleep for duration

| Param | Type | Description |
| ----- | --- | -------- |
| duration | number |  |


<a class='md-heading-link' name="pon-timer-class-pon-timer-isSleeping" ></a>

### timer.isSleeping() -> `boolean`

Sleeps or not



