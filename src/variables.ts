import type ModuleInstance from './main.js'

export type VariablesSchema = {
	software_version: string
	show_name: string
}

export function UpdateVariableDefinitions(self: ModuleInstance): void {
	self.setVariableDefinitions({
		software_version: { name: 'Titan Software Version' },
		show_name: { name: 'Current Show Name' },
	})
}
