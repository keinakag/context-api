import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext.jsx";

export class Single extends React.Component {
	render() {
		return (
			<div className="jumbotron">
				<hr className="my-4" />

				<Link to="/demo">
					<span
						className="btn btn-success btn-lg"
						href="#"
						role="button">
						Back to List
					</span>
				</Link>

				<span className="btn btn-warning btn-lg" href="#" role="button">
					Update
				</span>

				<span className="btn btn-danger btn-lg" href="#" role="button">
					Delete
				</span>
			</div>
		);
	}
}
