import './StatusBar.css';

export default function StatusBar() {
  return (
    <div className="status-bar">
      <div className="status-item">
        <span className="dot dot-green" />
        SYSTEMS NOMINAL
      </div>
      <div className="status-item">
        <span className="dot dot-blue" />
        UPTIME: 99.9%
      </div>
      <div className="status-item">
        <span className="dot dot-orange" />
        AWS ECS FARGATE
      </div>
      <div className="status-right">
        OPEN TO DEVOPS / SRE / CLOUD ROLES &nbsp;→
      </div>
    </div>
  );
}
