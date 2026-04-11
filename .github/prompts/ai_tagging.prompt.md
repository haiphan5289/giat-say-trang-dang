---
description: Auto Generate and implement Tagging flow
mode: agent
---
Define the task to achieve:


parameters:
	- name: featureName
		description: The ECS feature name to generate (e.g., xử lý đơn giặt, ad_optimization)
		required: true

Define the task to achieve:

Run the following terminal command to generate ECS const enum / union type and tracker for the specified feature:

```sh
python3 gen_ecs_const enum / union type.py --feature-name {featureName}
```

Specific requirements:
- The script must complete successfully (exit code 0).
- The following files should be generated or updated:
	- ECSCodeGen/analytics/events/{FeatureName}Tracker.ts
	- ECSCodeGen/analytics/events/{FeatureName}EventType.ts

Constraints:
- Only overwrite existing files if necessary and confirmed.
- Use Python 3 for execution.


---
# How to Use

1. Set the `featureName` parameter to the ECS feature you want to generate (e.g., `xử lý đơn giặt`, `ad_optimization`).
2. The system will automatically run:
	```sh
	python3 gen_ecs_const enum / union type.py --feature-name {featureName}
	```
3. The following files will be generated or updated:
	- `ECSCodeGen/analytics/events/{FeatureName}Tracker.ts`
	- `ECSCodeGen/analytics/events/{FeatureName}EventType.ts`
4. The process will confirm success and check the output files for expected TypeScript code.

## Example

If you want to generate for the feature `xử lý đơn giặt`, set:

```
featureName: xử lý đơn giặt
```

The system will run:

```sh
python3 gen_ecs_const enum / union type.py --feature-name xử lý đơn giặt
```

and verify the output files are correct.
