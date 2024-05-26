const formSchema = {
	title: 'Basic Information Form',
	fields: [
		{
			component: 'text-field',
			name: 'name',
			label: 'Name',
			required: true,
		},
		{
			component: 'text-field',
			name: 'email',
			label: 'Email',
			type: 'email',
			required: true,
		},
		{
			component: 'textarea',
			name: 'message',
			label: 'Message',
			required: true,
		}
	],
};

export default formSchema;
