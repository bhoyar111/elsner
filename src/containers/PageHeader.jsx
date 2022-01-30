import React from 'react';
import { Button } from '@material-ui/core';

export default function PageHeader (props) {

	const { title, addlink, backlink } = props;

  	return (
		<div className="d-flex justify-content-between">
			{title && <p className="title mb-0">{ title } </p>}

			<div>
				{ addlink &&
					<Button
						href={`/#/${addlink}`}
						size="small"
						variant="contained"
						color="primary"
						className="orange-btn-mui text-white"
						>
						&#43; Add
					</Button>
				}

				{ backlink &&
					<Button
						href={`/#/${backlink}`}
						size="small"
						variant="contained"
						color="primary"
						className="ml-3 grey-btn-mui text-white"
						>
						Back
					</Button>
				}
			</div>
		</div>
    );
}

