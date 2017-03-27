# pon-timer@1.0.0

Timer for pon

+ Functions
  + [create(args)](#pon-timer-function-create)
+ [`PonTimer`](#pon-timer-class) Class
  + [new PonTimer()](#pon-timer-class-pon-timer-constructor)
  + [timer.sleep(duration)](#pon-timer-class-pon-timer-sleep)
  + [timer.isSleeping()](#pon-timer-class-pon-timer-isSleeping)
  + [timer.tick()](#pon-timer-class-pon-timer-tick)

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



<a class='md-heading-link' name="pon-timer-class-pon-timer-sleep" ></a>

### timer.sleep(duration) -> `Promise`

Sleep for duration

| Param | Type | Description |
| ----- | --- | -------- |
| duration | number |  |


<a class='md-heading-link' name="pon-timer-class-pon-timer-isSleeping" ></a>

### timer.isSleeping() -> `boolean`

Sleeps or not

<a class='md-heading-link' name="pon-timer-class-pon-timer-tick" ></a>

### timer.tick() -> `number`

Measure time from last tick



