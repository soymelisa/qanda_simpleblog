import React from 'react';

const ApprovalCard = () => {
    return (
        <div className="ui card">
            <div className="content">¿estás seguro?</div>
            <div className="extra content">
                <div className="ui two buttons">
                    <div className="ui basic green button">Aprobar</div>
                    <div className="ui basic red button">Rechazar</div>
                </div>
            </div>
        </div>
    )
}; 

export default ApprovalCard; 