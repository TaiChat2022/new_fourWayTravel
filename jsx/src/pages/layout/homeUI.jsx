import React from 'react';

const HomeUI = ({
    user
}) => {
    return (
        <>
            {user ?
                (
                    <>
                        <p className="text-center text-muted">
                            Chào mừng bạn {user.displayName}
                            đến website FourWay Travel
                        </p>
                    </>
                ) 
                : (
                    <>
                        <p className="text-center text-muted">Chào mừng bạn đến website FourWay Travel</p>
                    </>
                )
            }
        </>
    );
};

export default HomeUI;