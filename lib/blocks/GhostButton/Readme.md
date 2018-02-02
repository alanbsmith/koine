```jsx
<FlexContainer>
  <FlexRow>
    <FlexColumn>
      <GhostButton modifiers={['hoverDanger']}>
        <GhostButton.Icon name="home" modifiers={['left']} />
        <GhostButton.Text>action</GhostButton.Text>
      </GhostButton>
    </FlexColumn>
    <FlexColumn>
      <GhostButton>
        <GhostButton.Text>action</GhostButton.Text>
        <GhostButton.Icon name="home" modifiers={['right']} />
      </GhostButton>
    </FlexColumn>
  </FlexRow>
</FlexContainer>
```
