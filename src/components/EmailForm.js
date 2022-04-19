import React from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import emailjs from "@emailjs/browser";

const MySelect = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<div>
			<label htmlFor={props.id || props.name}>{label}</label>
			<select {...field} {...props} />
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</div>
	);
};

const Basic = () => (
	<div>
		<h1>Any place in your app!</h1>
		<Formik
			initialValues={{
				job: "",
				name: "",
				company: "",
				to: "",
				skill_1: "",
				skill_2: "",
				skill_3: "",
				template: "",
			}}
			validate={(values) => {
				const errors = {};
				if (!values.job) {
					errors.job = "Required";
				}
				return errors;
			}}
			onSubmit={(values, { setSubmitting }) => {
				const { job, name, company, to, skill_1, skill_2, skill_3, template } =
					values;
				setTimeout(() => {
					console.log(
						`${job}, ${name}, ${company}, ${to}, ${skill_1}, ${skill_2}, ${skill_3}, ${template}`
					);
					emailjs.send(
						"service_hvxwgj9",
						`template_${template}`,
						{
							job,
							name,
							company,
							to,
							skill_1,
							skill_2,
							skill_3,
						},
						"b6qX3WNsdVhOUeLiC"
					);
					setSubmitting(false);
				}, 400);
			}}>
			{({ isSubmitting }) => (
				<Form>
					<MySelect label="Email Template" name="template">
						<option value="">Select a template</option>
						<option value="outreach">Initial Outreach</option>
						<option value="follow_up_1">Follow Up 1</option>
						<option value="follow_up_2">Follow Up 2</option>
					</MySelect>

					<Field type="job" name="job" placeholder="Job Title" />
					<ErrorMessage name="job" component="div" />

					<Field type="name" name="name" placeholder="Company Contact" />
					<ErrorMessage name="name" component="div" />

					<Field type="company" name="company" placeholder="Company" />
					<ErrorMessage name="company" component="div" />

					<Field type="to" name="to" placeholder="Contact Email" />
					<ErrorMessage name="to" component="div" />

					<Field type="skill_1" name="skill_1" placeholder="Skill 1" />
					<ErrorMessage name="skill_1" component="div" />

					<Field type="skill_2" name="skill_2" placeholder="Skill 2" />
					<ErrorMessage name="skill_2" component="div" />

					<Field type="skill_3" name="skill_3" placeholder="Skill 3" />
					<ErrorMessage name="skill_3" component="div" />

					<button type="submit" disabled={isSubmitting}>
						Submit
					</button>
				</Form>
			)}
		</Formik>
	</div>
);

export default Basic;
