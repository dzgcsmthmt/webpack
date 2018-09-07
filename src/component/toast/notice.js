import React from 'react'

function empty() {}

class Notice extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            shouldClose: false, // 是否开启关闭动画
        }
    }
    componentDidMount () {
        if(this.props.duration > 0){
            this.closeTimer = setTimeout(() => {
                this.close();
            }, this.props.duration - 300); // 减掉消失动画300毫秒
        }
    }
    componentWillUnmount () {
        // 当有意外关闭的时候 清掉定时器
        this.clearCloseTimer();
    }
    clearCloseTimer () {
        if (this.closeTimer) {
            clearTimeout(this.closeTimer);
            this.closeTimer = null;
        }
    }
    close () {
        // 关闭的时候 应该先清掉倒数定时器
        // 然后开启过场动画
        // 等待动画结束 执行回调
        this.clearCloseTimer();
        const _this = this;
        _this.setState({shouldClose: true});
        this.timer = setTimeout(()=>{
            if(this.props.onClose){
                this.props.onClose();
            }
            clearTimeout(_this.timer);
        }, 300);
    }
    render () {
        const {shouldClose} = this.state;
        const {prefixCls, type, iconClass, content} = this.props;

        return (
            <div className={`{prefixCls} ${type}`}>
                {iconClass ? <div className={`${prefixCls}-icon`}><span className={`fa ${iconClass}`} /></div> : null}
                <div className={`${prefixCls}-content`}>{content}</div>
            </div>
        )
    }
}

// Notice.propTypes = {
//     duration: React.PropTypes.number.isRequired, // Notice显示时间
//     prefixCls: React.PropTypes.string, // 前缀class
//     type: React.PropTypes.oneOf(['info', 'success', 'warning', 'error']), // notice类型
//     iconClass: React.PropTypes.string, // icon的class
//     content: React.PropTypes.any, // Notice显示的内容
//     onClose: React.PropTypes.func // 显示结束回调
// };

Notice.defaultProps = {
    prefixCls: 'zby-notice',
    duration: 3000,
    onClose: empty
};

export default Notice
