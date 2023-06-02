import { exec } from "child_process";

exec(`docker exec container_db mongo -u user -p password --eval "rs.initiate({_id: 'rs0', members: [{_id: 0, host: 'localhost:27017'}]});"`);