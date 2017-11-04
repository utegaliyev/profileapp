export const PROJECT_CLICKED = '';

export function projectClick(){
    alert('project clicked');
    return {type: PROJECT_CLICKED};
}