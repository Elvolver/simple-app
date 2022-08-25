import * as React from 'react';

import {Link} from "react-router-dom";

const NotFoundPage = () => {
    return (
        <div>
            404 <Link to="/">На главную</Link>
        </div>
    )
}

export default NotFoundPage