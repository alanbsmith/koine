```jsx
<FlexContainer>
  <FlexRow>
    <FlexColumn>
      <Button modifiers={['bgPrimary', 'hoverBgPrimary']}>
        <Button.Icon name="home" modifiers={['left']} />
        <Button.Text>action</Button.Text>
      </Button>
    </FlexColumn>
    <FlexColumn>
      <Button>
        <Button.Text>action</Button.Text>
        <Button.Icon name="home" modifiers={['right']} />
      </Button>
    </FlexColumn>
  </FlexRow>
</FlexContainer>
```
