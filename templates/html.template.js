module.exports = componentName => `\
<div class="wrapper ${componentName}-container">
    <div class="${componentName}-container__wrapper">
        <!-- HEADER -->
        <div class="${componentName}-container__header">
            <div class="${componentName}-container__header--title">
                <span [innerHTML]="'layoutv3.${componentName}.title' | translate"></span>
            </div>
        </div>
        <!-- BODY -->
        <div class="${componentName}-container__body">

        </div>
    </div>
</div>
`;