import React from 'react';
import { Button, Card } from 'antd';
import './Part1.css';
import Shpere from '../../components/myanimation/myShpere/Shpere';
import Part1Text from '../../components/mytext/part1text/Part1Text';

const Part1: React.FC = () => {
    return (
        <div style={{height: '100%', paddingTop: '64px'}}>
            <div className='part1'>
                <div
                    className='part1leftcard'
                >
                    <Shpere />
                    {/* <img src={ig} className='part1img' /> */}
                </div>
                <Card hoverable className='rightcontent'>
                    <Part1Text />
                    <div className='buttondiv'>
                        <Button
                            type="primary"
                            className='part1button'
                            onClick={() => {
                                document.getElementById('section6')?.scrollIntoView({ behavior: 'smooth' });
                            }}
                        >
                            <h1>
                                我的联系
                            </h1>
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    );
};

export default Part1;