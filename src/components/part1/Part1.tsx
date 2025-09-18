import React from 'react';
import { Button, Card } from 'antd';
import './Part1.css';
import Shpere from '../myanimation/myShpere/Shpere';

const Part1: React.FC = () => {
    return (
        <div>
            <div className='part1'>
                <div
                    className='part1leftcard'
                >
                    <Shpere />
                    {/* <img src={ig} className='part1img' /> */}
                </div>
                <Card hoverable className='rightcontent'>
                    <div>
                        <h1 style={{
                                textAlign: 'left', 
                                marginTop: '0px',
                                marginLeft: '32px',
                            }}>Introduce</h1>
                        <div style={{ fontSize: '20px', lineHeight: '1.6', padding: '0 32px' }}>
                            <p style={{ width: '90%', marginBottom: '16px', fontSize: '32px', fontWeight: 'bold', textAlign: 'left' }}>
                                你好，我是一名大三本科生，一名热爱编程的学生。
                            </p>
                            <p style={{ width: '90%', marginBottom: '16px', fontSize: '32px', textAlign: 'left' }}>
                                专注于前端开发领域，特别是在JavaScript、TypeScript和Node.js的应用方面有较多的学习和实践经验。
                                通过学习这些技术，我掌握了前端开发的基本框架和库，如React和Vue3，同时也学习过一些后端开发的语言。
                            </p>
                        </div>
                    </div>
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