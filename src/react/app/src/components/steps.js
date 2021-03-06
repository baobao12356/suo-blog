import React from 'react';
import './steps.scss'
const dataSource = [
    {
        title: '快递签收不成功',
        description: '因收方客户拒收快递,待进一步处理额外任务而温热温热我认为儿惹我认为热舞但是发生地方',
        datetime: '2014-10-11 16:46'
    },
    {
        title: '快递签收不成功',
        description: '因收方客户拒收快递,待进一步处理因收方客户拒收快递,待进一步处理额外任务而温热温热我认为儿惹我认为热舞但是发生地方因收方客户拒收快递,待进一步处理因收方客户拒收快递,待进一步处理额外任务而温热温热我认为儿惹我认为热舞但是发生地方',
        datetime: '2014-10-11 16:46'
    },
    {
        title: '快递签收不成功',
        description: '因收方客户拒收快递,待进一步处理',
        datetime: '2014-10-11 16:46'
    },
    {
        title: '快递签收不成功',
        description: '因收方客户拒收快递,待进一步处理',
        datetime: '2014-10-11 16:46'
    },
    {
        title: '快递签收不成功',
        description: '因收方客户拒收快递,待进一步处理',
        datetime: '2014-10-11 16:46'
    },
    {
        title: '快递签收不成功',
        description: '因收方客户拒收快递,待进一步处理',
        datetime: '2014-10-11 16:46'
    },
    {
        title: '快递签收不成功',
        description: '因收方客户拒收快递,待进一步处理',
        datetime: '2014-10-11 16:46'
    },
    {
        title: '快递签收不成功',
        description: '因收方客户拒收快递,待进一步处理',
        datetime: '2014-10-11 16:46'
    }
]
const showMax = 3
export default class Steps extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            data: dataSource,
            showBtn: false
        }
    }
    componentDidMount() {
        if (dataSource.length > showMax) {
            this.setState({
                data: dataSource.slice(0, showMax),
                showBtn: true
            })
        }
    }
    handleClickExpand = () => {
        this.setState({
            data: dataSource,
            showBtn: false
        })
    }
    handleClickHide = () => {
        if (dataSource.length > 3) {
            this.setState({
                data: dataSource.slice(0, showMax),
                showBtn: true
            })
        }
    }
    render() {
        return (
            <div className="steps">
                {
                    this.state.data.map((item, index, arr) => (
                        <div className="steps-item" key={index}>
                            <div className={index === 0 ? 'steps-item-icon--active' : 'steps-item-icon'}></div>
                            { arr.length > index + 1 && <div className="steps-item-line"></div>}
                            <div className="steps-item-content">
                                <div className="steps-item-content-title">{item.title}</div>
                                <div className="steps-item-content-description">{item.description}</div>
                                <div className="steps-item-content-datetime">{item.datetime}</div>
                            </div>
                        </div>))
                }
                {
                    this.state.showBtn ?
                        <div className="steps-expand" onClick={this.handleClickExpand}>展开</div> :
                        <div className="steps-expand" onClick={this.handleClickHide}>收起</div>
                }
            </div>
        )
    }
}