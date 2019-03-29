module.exports = componentName => `\
@import '../mixins/${componentName}';

$background-color: #ffffff;
$title-color: #354052;

.${componentName}-container {
  display: flex;
  height: 100vh;

  .${componentName}-container__wrapper {
    margin: 10px;
    width: 100%;

    .${componentName}-container__header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background-color: $background-color;
      border-top-right-radius: 11px;
      border-top-left-radius: 11px;
      height: 60px;

      .${componentName}-container__header--title {
        @include setFont(Roboto, 15px, "", 500);
        color: $title-color;

        span {
          padding-left: 30px;
        }
      }
    }

    .${componentName}-container__body {
      height: calc(100vh - 80px); // margins and header height
      background-color: $background-color;
      border-bottom-right-radius: 11px;
      border-bottom-left-radius: 11px;
      overflow-x: hidden;
    }
  }
}
`;