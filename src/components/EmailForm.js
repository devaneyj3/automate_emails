import React from "react";
import { Formik, Form, Field, ErrorMessage, useField } from "formik";
import emailjs from "@emailjs/browser";
import "./EmailForm.css";

const MySelect = ({ label, ...props }) => {
	const [field, meta] = useField(props);
	return (
		<>
			<select {...field} {...props} />
			{meta.touched && meta.error ? (
				<div className="error">{meta.error}</div>
			) : null}
		</>
	);
};

const Basic = () => (
	<div className="form_container">
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
					emailjs.send(
						process.env.REACT_APP_EMAIL_SERVICE_ID,
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
						process.env.REACT_APP_EMAIL_USER_ID
					);
					setSubmitting(false);
				}, 400);
			}}>
			{({ isSubmitting }) => (
				<Form>
					<MySelect label="Email Template" name="template">
						<option value="">Select a template</option>
						<option value="tech-adjacent">Tech Adjacent</option>
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
						{isSubmitting ? "Sending..." : "Submit"}
					</button>
				</Form>
			)}
		</Formik>
	</div>
);

export default Basic;
