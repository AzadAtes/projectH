declare type Task = {
	id: string;
	name: string;
	description?: String;
	dueDateAndTime?: String;

	subTasks?: SubTask[];

	complete?: boolean;
	date?: null;
	fullDate?: Date;
	important?: Boolean;
	myDay?: Boolean;
	planned?: Boolean;
};

declare type SubTask = {
	id: string;
	name: string;
	dueDateAndTime?: String;

	subSubTasks?: SubSubTask[];

	complete?: boolean;
	date?: null;
	fullDate?: Date;
	important?: Boolean;
	myDay?: Boolean;
	planned?: Boolean;
};

declare type SubSubTask = {
	id: string;
	name: string;
	dueDateAndTime?: String;

	complete?: boolean;
	date?: null;
	fullDate?: Date;
	important?: Boolean;
	myDay?: Boolean;
	planned?: Boolean;
};
