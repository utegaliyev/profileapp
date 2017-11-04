export const ISSUE_CLICKED = '';

export function issueClick(){
    alert('issue clicked');
    return {type: ISSUE_CLICKED};
}