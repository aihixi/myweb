const Part1Text: React.FC = () => {
    return (
      <div>
        <h1 style={{
                textAlign: 'left', 
                marginLeft: '32px',
            }}>Introduce
        </h1>
        <ul style={{ lineHeight: '1.6', padding: '0 8px', listStyle: 'none' }}>
            <li style={{ width: '90%', paddingLeft: '24px', marginBottom: '8px', fontSize: '2rem', fontWeight: 'bold', textAlign: 'left' }}>
                你好，我是一名大三本科生，一名热爱编程的学生。
            </li>
            <li style={{ width: '90%', paddingLeft: '24px', marginBottom: '8px', fontSize: '2rem', textAlign: 'left' }}>
                专注于前端开发领域，特别是在JavaScript、TypeScript和Node.js的应用方面有较多的学习和实践经验。
              通过学习这些技术，我掌握了前端开发的基本框架和库，如React和Vue3，同时也学习过一些后端开发的语言。
            </li>
        </ul>
      </div>
    )
};

export default Part1Text;