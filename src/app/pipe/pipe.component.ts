import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "filter",
})
export class PipeComponent implements PipeTransform {
  transform(tasks: any[], taskName: string): any[] {
    // return empty array if array is false
    if (!tasks) {
      return [];
    }

    // return the original array if taskName text is empty
    if (!taskName) {
      return tasks;
    }

    // retrun the filtered array
    return tasks.filter((task) => {
      if (task && task["task-name"]) {
        return task["task-name"].includes(taskName);
      }
      return false;
    });
  }
}
