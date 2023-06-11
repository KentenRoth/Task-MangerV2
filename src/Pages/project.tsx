import { RootState } from '../app/store';
import { useSelector } from 'react-redux';

import SoloBoard from '../Components/soloBoard';
import TeamBoard from '../Components/teamBoard';
import { useState, useEffect } from 'react';

const TaskManager = () => {
	const allTickets = useSelector((state: RootState) => state.tickets);
	const [soloOrTeam, setSoloOrTeam] = useState(Boolean);
	const hasTeam = useSelector(
		(state: RootState) => state.projects.currentProject
	);

	useEffect(() => {
		if (hasTeam.admins?.length !== 0 || hasTeam.teams?.length !== 0) {
			setSoloOrTeam(true);
		} else {
			setSoloOrTeam(false);
		}
	}, [hasTeam]);

	return (
		<>
			<section className="task-manager">
				<div className="task-manager_container">
					{soloOrTeam ? (
						<TeamBoard tickets={allTickets.tickets} />
					) : (
						<SoloBoard tickets={allTickets.tickets} />
					)}
				</div>
			</section>
		</>
	);
};

export default TaskManager;
