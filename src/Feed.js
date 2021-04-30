import Card from 'react-bootstrap/Card'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Feed() {
    
    var username = localStorage.getItem('username')

    return (
        
        <div className="feed1">
            <h2>Welcome back to the feed, {username}</h2>

            <div className="postFeed">
                <Card>
                    <Card.Header>
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="ml-2">
                                    <div className="h5 m-0">@LeeCross</div>
                                    <div className="h7 text-muted">Miracles Lee Cross</div>
                                </div>
                            </div>
                        </div>
                    </Card.Header>
                    <div className="card-body">
                        <div className="text-muted h7 mb-2"> <i class="fa fa-clock-o"></i>10 min ago</div>
                        <a className="card-link" href="#">
                            <h5 className="card-title">Lorem ipsum dolor sit amet, consectetur adip.</h5>
                        </a>

                        <p className="card-text">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quo recusandae nulla rem eos ipsa praesentium esse magnam nemo dolor
                            sequi fuga quia quaerat cum, obcaecati hic, molestias minima iste voluptates.
                        </p>
                    </div>
                    <div className="card-footer">
                        <a href="#" class="card-link"><i class="fa fa-gittip"></i> Like</a>
                        <a href="#" class="card-link"><i class="fa fa-comment"></i> Comment</a>
                        <a href="#" class="card-link"><i class="fa fa-mail-forward"></i> Share</a>
                    </div>
                </Card>
            </div>
        </div>
    );
}

export default Feed;